def solution(routes):

    routes.sort(key=lambda x: x[1])
    answer = 0
    last = -30001  
    
    for route in routes:
        start, end = route
        
        if last < start:
            answer += 1
            last = end  
    
    return answer