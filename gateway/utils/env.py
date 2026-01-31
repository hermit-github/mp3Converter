import os
from dotenv import load_dotenv
from enum import Enum

load_dotenv()

class ENVIRONMENT(Enum):
    DEVELOPMENT = "development"
    PRODUCTION = "production"
    TESTING = "testing"
    DB_HOST = "DB_HOST"
    DATABASE_URL = "DATABASE_URL"

def get_env_variable(name: str, default: str = None) -> str:
    """Get an environment variable or return a default value."""
    return os.getenv(name, default)


APP_ENV = {
    "ENV": get_env_variable("APP_ENV", "development"),
    "DEBUG": get_env_variable("APP_DEBUG", "true").lower() == "true",
    "PORT": int(get_env_variable("APP_PORT", "8000")),
    "DB_HOST": get_env_variable("DB_HOST", "random"),
    "DATABASE_URL": get_env_variable("DATABASE_URL", "sqlite+aiosqlite:///./test.db"),
}