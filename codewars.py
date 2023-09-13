# // # Given an array of integers, find the one that appears an odd number of times.

# // # There will always be only one integer that appears an odd number of times.

# // # Examples
# // # [7] should return 7, because it occurs 1 time (which is odd).
# // # [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
# // # [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
# // # constraints: 
# // # cannot use .count()

def odd_int(arr):
    counter = 0
    current_num = 0
    for num in arr:
        current_num = num
        for num in arr:
            if num == current_num:
                counter += 1
    if counter %2 != 0:
        return current_num




print(odd_int([2, 1, 2, 1, 2, 2, 1]))



~~~~~~~~~~~~~~~~~~~~~~~~~CODE WARS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
