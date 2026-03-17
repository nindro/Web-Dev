if __name__ == '__main__':
    N = int(input())
    list = []
    
    for _ in range(N):
        line = input().split()
        command = line[0]
        other = line[1:]
        
        if command == "insert":
            list.insert(int(other[0]), int(other[1]))
        elif command == "print":
            print(list)
        elif command == "remove":
            list.remove(int(other[0]))
        elif command == "append":
            list.append(int(other[0]))
        elif command == "sort":
            list.sort()
        elif command == "pop":
            list.pop()
        elif command == "reverse":
            list.reverse()
