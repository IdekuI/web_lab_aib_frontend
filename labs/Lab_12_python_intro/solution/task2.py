import heapq

def sum_find_median(n, arr):
    max_heap = [] 
    min_heap = [] 
    median_sum = 0
    
    for i in range(n):
        heapq.heappush(max_heap, -arr[i])  
        heapq.heappush(min_heap, -heapq.heappop(max_heap))
        
        if len(min_heap) > len(max_heap):
            heapq.heappush(max_heap, -heapq.heappop(min_heap))  
        median_sum -= max_heap[0]  

    return median_sum

def individual_medians(n, arr):
    max_heap = [] 
    min_heap = [] 
    medians = []

    for i in range(n):
        heapq.heappush(max_heap, -arr[i])  
        heapq.heappush(min_heap, -heapq.heappop(max_heap))
        
        if len(min_heap) > len(max_heap):
            heapq.heappush(max_heap, -heapq.heappop(min_heap))  
        
        median = -max_heap[0] if (i + 1) % 2 == 1 else (min_heap[0] - max_heap[0]) / 2
        medians.append(int(median))  

    return medians

def main():
    n = int(input())
    arr = list(map(int, input().split()))

    result_sum = sum_find_median(n, arr)
    result_medians = individual_medians(n, arr)

    print("Sum:", result_sum)
    print("Medians:", result_medians)

if __name__ == "__main__":
    main()