from flask import Flask,jsonify,request,json
from flaskext.mysql import MySQL
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
mysql=MySQL()
app.config['MYSQL_DATABASE_HOST']='localhost'
app.config['MYSQL_DATABASE_USER']='root'
app.config['MYSQL_DATABASE_PASSWORD']='12345'
app.config['MYSQL_DATABASE_DB']='home'
mysql.init_app(app)
0
@app.route('/login',methods=['POST'])
def login():
    con=mysql.connect()
    cursor=con.cursor()

    email=request.get_json()['email']
    password=request.get_json()['password']
    result=""
    query='select * from user where email="{email}"'.format(email=email)
    print(query)
    cursor.execute(query)
    data=cursor.fetchone()
    if(data==None or email=="" or password==""):
        result="denied"
    elif (data[3]==password):
        result="access"
    else:
        result="denied"
    return jsonify(result)

@app.route('/register',methods=['POST'])
def register():
    conn = mysql.connect()
    cursor=conn.cursor()

    fname=request.get_json()['fname']
    lname=request.get_json()['lname']
    email=request.get_json()['email']
    password=request.get_json()['password']
    query = 'insert into user values("{fname}","{lname}","{email}","{password}")'.format(
        email = email,
        fname=fname,
        lname=lname,
        password=password,
    )
    cursor.execute(query)
    conn.commit()
    return jsonify("True")

@app.route('/blog',methods=['Get'])
def blog():
    conn=mysql.connect()
    cursor=conn.cursor()
    query='select * from blog'
    cursor.execute(query)
    data=cursor.fetchall()
    return jsonify(data)

if (__name__ == "__main__"):
    app.run(debug=True)

