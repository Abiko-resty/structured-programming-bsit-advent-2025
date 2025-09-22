USERNAME = "Resty"
PASSWORD = "mypassword2005"

# Allow 3 attempts
attempts = 3
while attempts > 0:
    user = input("Enter username: ")
    pwd = input("Enter password: ")

    if user == USERNAME and pwd == PASSWORD:
        print("Login successful! Welcome,", user)
        break
    else:
        attempts -= 1
        print(f"Incorrect username or password. Attempts left: {attempts}")

if attempts == 0:
    print("Too many failed attempts. Access denied!")