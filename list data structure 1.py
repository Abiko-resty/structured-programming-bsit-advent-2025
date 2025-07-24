# list data structure[]

# boys = ['James',['John'],['Peter'],['Mark']
# print(boy[0]) ## picking the first person.index = 0



### adding elements to the list
# girls = []
# girls.append("Jaon")


# number = int(input("Enter the number of girls you want to record:"))
# i =1;
# while 
# girl = input("Enter the name: ")
# girl.append(girls)
# 1+=1
# Print(girls)


## list oprerations
girls = ['Joan', 'jane','Josephine', 'christian','frida']
print(girls)
print(f"original:{girls}")

##list modification
girls[0] = ("Joanitah")
print (girls)
girls.insert(1,'Juliet')
print(f"Changed and added: {girls}")
print(girls)

girls.pop() ## delect only the last name

girls.remove("Juliet")
print(f"Removed Juliet: {girls}")
print(girls)

### list slicing
print(girls[1:4])

## nest lists
