from fastapi.testclient import TestClient
from sqlmodel import Field, SQLModel,Session, create_engine, select
from todoapp import settings
from todoapp.main import app, get_session

def test_read_main():  # function to test root main function
    client = TestClient(app=app)  # need a client of main.py files instance of fastapi
    response = client.get("/")    # response for root "/" when called from client
    
    # Convert both expected and actual response JSON to lowercase
    expected_response = {"hello": "world"}
    actual_response = {k.lower(): v.lower() for k, v in response.json().items()}
    
    assert response.status_code == 200 #for debuging and testing hold true if 200 else assertionError
    assert actual_response == expected_response
    
    # Ensure that the JSON key used for the todo content matches the database column name
todo_content_key = "context"

def test_write_main():
    connection_string = str(settings.TEST_DATABASE_URL).replace(
        "postgresql", "postgresql+psycopg")

    engine = create_engine(
        connection_string, connect_args={"sslmode": "require"}, pool_recycle=300)

    SQLModel.metadata.create_all(engine)  

    with Session(engine) as session:  

        def get_session_override():  
            return session  

        app.dependency_overrides[get_session] = get_session_override 

        client = TestClient(app=app)

        todo_content = "buy bread34"

        # Ensure that the JSON key used for the todo content matches the database column name
        response = client.post("/todos/",
            json={todo_content_key: todo_content}
        )

        data = response.json()

        assert response.status_code == 200
        assert data[todo_content_key] == todo_content

    def test_update_todo():
        connection_string = str(settings.TEST_DATABASE_URL).replace(
            "postgresql", "postgresql+psycopg")

        engine = create_engine(
            connection_string, connect_args={"sslmode": "require"}, pool_recycle=300)

        
        with Session(engine) as session:  

            def get_session_override():  
                return session  

            app.dependency_overrides[get_session] = get_session_override 
        client = TestClient(app)
    # First, create a todo item
    response = client.post("/todos/", json={"content": "test todo"})
    assert response.status_code == 200
    todo_id = response.json()["id"]
    # Update the todo item
    updated_content = "updated todo"
    response = client.put(f"/todos/{todo_id}", json={"context": updated_content})
    assert response.status_code == 200
    # Add assertions to check the updated todo item

    def test_delete_todo():
        connection_string = str(settings.TEST_DATABASE_URL).replace(
            "postgresql", "postgresql+psycopg")

        engine = create_engine(
            connection_string, connect_args={"sslmode": "require"}, pool_recycle=300)

        
        with Session(engine) as session:  

            def get_session_override():  
                return session  

            app.dependency_overrides[get_session] = get_session_override 
        
        client = TestClient(app)
    # First, create a todo item
    response = client.post("/todos/", json={"context": "test todo"})
    assert response.status_code == 200
    todo_id = response.json()["id"]
    # Delete the todo item
    response = client.delete(f"/todos/{todo_id}")
    assert response.status_code == 200
    # Add assertions to check the deletion
