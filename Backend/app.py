from flask import Flask, request, jsonify
from flask_cors import CORS
import psycopg2

app = Flask(__name__)
CORS(app)  # Habilita CORS para todas las rutas

# Función para obtener la conexión a la base de datos
def get_db_connection():
    conn = psycopg2.connect(
        host="db",
        database="docker",
        user="admin",
        password="admin"
    )
    return conn

@app.route('/login', methods=['POST'])
def login():
    # Obtener datos del usuario desde la solicitud
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    # Conectar a la base de datos y verificar el usuario
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("SELECT * FROM users WHERE username = %s AND password = %s", (username, password))
    user = cur.fetchone()
    cur.close()
    conn.close()

    if user:
        return jsonify({"message": "Login successful"})
    else:
        return jsonify({"message": "Invalid username or password"}), 401

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
