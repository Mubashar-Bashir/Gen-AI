# fastapi_neon/main.py
from contextlib import asynccontextmanager # contextlib asynccontextmanager used for compatibility with asyncio 
from typing import Union, Optional, Annotated
# Import necessary modules
from sqlalchemy import MetaData
from fastapi import HTTPException
from todoapp import settings
from sqlalchemy import create_engine
from sqlmodel import Field, Session, SQLModel,  select
from fastapi import FastAPI,Depends


# Define metadata object
metadata = MetaData()
# step 1 
# Todo instance inherited from Sqlmodel interface having (id,context,description)  fields database tables columns
class Todo(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True, unique=True)
    context: str = Field(index=True)
   # description: str = field(string=True)

# only needed for psycopg 3 - replace postgresql
# with postgresql+psycopg in settings.DATABASE_URL
connection_string = str(settings.DATABASE_URL).replace(
    "postgresql", "postgresql+psycopg"
)
connect_args = {"sslmode": "require"}  # Assuming correct sslmode value
    
#step 3 engine=create_engine
# recycle connection after 5 minutes to correspond with the compute scale down
engine = create_engine(connection_string, connect_args=connect_args, pool_recycle=300)

# Bind engine to metadata
#metadata.bind = engine

# Create database tables
#metadata.create_all(engine)

#step 4 creaet_db_tables
def create_db_tables():
    print("DB creation query function called ")
    SQLModel.metadata.create_all(engine)

# the first part of the function , before the yield , 
# will be execute before the application starts
#======================================================
#Once the code within the context is executed, the context manager resumes
# its operation after the `yield` statement.
# 
# In summary, this code sets up a context manager to perform certain operations
# (such as creating database tables) within an asynchronous context, allowing
# for better resource management and cleanup.

@asynccontextmanager
async def lifespan(app:FastAPI):
    print('Creating Tables ...')
    create_db_tables()
    yield 

app = FastAPI(lifespan=lifespan)

app = FastAPI(title="Hello World API", 
    version="0.0.1")

# Use the asynchronous context manager function
@app.on_event("startup")
async def startup_event():
    async with lifespan(app):
        print("Application startup")
#===========================================================
# get session
def get_session():
    with Session(engine) as session:
        yield session

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/todos", response_model=Todo)
def create_todo(todo:Todo, session: Annotated[Session,Depends(get_session)]):
    with Session(engine) as session:
        session.add(todo)
        session.commit()
        session.refresh(todo)
        return todo
    
@app.get("/todos/")
def read_todos():
    with Session(engine) as session:
        todos = session.exec(select(Todo)).all()
        return todos
    


    
@app.get("/todos/", response_model=list[Todo])
def read_todos(session: Annotated[Session, Depends(get_session)]):
        todos = session.exec(select(Todo)).all()
        return todos
    

# Update a Todo item
@app.put("/todos/{todo_id}")
def update_todo(todo_id: int, updated_todo: Todo):
    with Session(engine) as session:
        # Fetch the todo item from the database
        todo = session.get(Todo, todo_id)
        if not todo:
            # If the todo item does not exist, raise an HTTPException with status code 404 (Not Found)
            raise HTTPException(status_code=404, detail="Todo item not found")
        
        # Update the fields of the todo item
        todo.context = updated_todo.context
        # You can update other fields as well
        
        # Commit the changes to the database
        session.commit()
        # Return the updated todo item
        return todo

# Delete a Todo item
@app.delete("/todos/{todo_id}")
def delete_todo(todo_id: int):
    with Session(engine) as session:
        # Fetch the todo item from the database
        todo = session.get(Todo, todo_id)
        if not todo:
            # If the todo item does not exist, raise an HTTPException with status code 404 (Not Found)
            raise HTTPException(status_code=404, detail="Todo item not found")
        
        # Delete the todo item from the database
        session.delete(todo)
        # Commit the deletion
        session.commit()
        # Return a message indicating successful deletion
        return {"message": "Todo item deleted successfully"}