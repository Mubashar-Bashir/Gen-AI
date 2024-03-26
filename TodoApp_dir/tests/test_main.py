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
    
    # def test_write_main():
    #     connection_string = str(settings.TEST_DATABASE_URL).replace(
    #         "postgresql", "postgresql+psycopg")

    #     engine = create_engine(
    #         connection_string, connect_args={"sslmode": "require"}, pool_recycle=300)

    #     SQLModel.metadata.create_all(engine)  

    #     with Session(engine) as session:  

    #         def get_session_override():  
    #             return session  

    #         app.dependency_overrides[get_session] = get_session_override 

    #         client = TestClient(app=app)

    #         todo_content = "buy bread"

    #         response = client.post("/todos/",
    #             json={"content": todo_content}
    #     )

    #         data = response.json()

    #         assert response.status_code == 200
    #         assert data["content"] == todo_content

            