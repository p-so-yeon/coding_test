N = int(input())
building = list(map(int, input().split()))
answer = 0

for i in range(N):
    count = 0
    max_slope = -float('inf')
    
    # 오른쪽 방향에서 보이는 빌딩 계산
    for j in range(i + 1, N):
        slope = (building[j] - building[i]) / (j - i)
        if slope > max_slope:
            max_slope = slope
            count += 1
    
    max_slope = -float('inf')
    
    # 왼쪽 방향에서 보이는 빌딩 계산
    for j in range(i - 1, -1, -1):
        slope = (building[j] - building[i]) / (j - i)
        if slope > max_slope:
            max_slope = slope
            count += 1
    
    answer = max(answer, count)

print(answer)
