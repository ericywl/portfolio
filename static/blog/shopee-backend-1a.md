---
title: "Shopee Backend SWE Interview R1-A"
date: "2019-11-13"
---

Just recently, I got an interview with Shopee, an e-commerce company in Singapore, for the fresh grad backend software engineer position. I thought it would be great to note down my experience here for my own future reference, and so I did.

<center>
   <img src="../images/shopee-lobby.jpg" alt="What I saw when I went into the office, image credit to VulcanPost" /><br>
</center>

## Enter the Interview

I will just spare the details and skip forward to the interview itself. The first two questions that I was asked:

> Can you give a brief introduction of yourself?

> Can you tell me more about an interesting project that you have done?

The above questions are fairly typical so I just answered them as best as I could.
The real technical interview starts here. I was first asked to solve a small coding challenge.

> Given a document (represented by a list of words) can you find the word that is the 2-nd most frequent?

It is always good to ask for more clarification, in this case I asked whether the capitalization of the words count, of which I was replied with "No". The fairly obvious way would be to:

1. Construct a dictionary (or mapping) between words and frequency

2. Sort dictionary keys based on values

3. Get 2nd element in sorted list

I raised this initial solution to the interviewer, noting however that the solution would take `O(n log n)` and that a better alternative is possible. Instead of sorting the dictionary, we can just keep track of two variables, `most_freq` and `2nd_most_freq`, which represents the most and second most frequent word respectively. The algorithm goes as follows:

1. For each word in document, update frequency in dictionary

2. Check if the frequency of current word is more than `2nd_most_freq`

   a. Update `2nd_most_freq` if true

3. Check if frequency of `2nd_most_freq` word is more than `most_freq`

   b. Swap `most_freq` and `2nd_most_freq` if true

This makes the algorithm `O(n)` since we are only iterating through the document once.

## Follow-Up

After implementing the algorithm on the whiteboard, the interviewer seemed satisfied with the solution and proceeded to a follow-up.

> What if we want the k-th most frequent word instead?

Simple right? Instead of doing the swap between two variables, we just use an array. Whenever we append a new element to the array, we check if it is larger than the previous element and swap them if it is. We keep doing this ie. bubbling the element up until the condition is no longer true.

This ensures that the array is sorted as we are iterating through the document. The overall complexity would be `O(nk)` since in worst case scenario, we have to bubble-up the element `k`-times for the whole document (technically `O(2nk)` since we need to check if the word is already in the array but we can drop the constant).

After suggesting this algorithm to the interviewer, I was asked if we can do better. After some time of thinking, I was eventually given a hint.

> When updating the array, we always pick the minimum from the array to replace.

Minimum. A-ha! Min-heap. This was my first technical interview in basically forever, so I was kind of rusty. I told the interviewer that I only remember the basics of min-heap so I may need some time to think. The interviewer seemed fine with it and asked me if I know of any heap library in Python, to which I answered no (never had to use the `heapq` library before). I was then asked to implement one.

After some thinking and back-and-forth with the interviewer, I eventually came up with a tree-based heap (terrible!). It was only with some hints that I remembered that heaps can be implemented in arrays, but the problem was that I don't remember the parent-child relationship for heaps implemented in arrays. So, I had to come up with it on the spot. Eventually, I got to `parent_idx = floor((child_idx - 1) / 2)` and started writing the heap code.

Luckily I only had to implement the `insert()` and `balance()` function. After the heap implementation, I went back to the original problem and quickly solved it using min-heap. Since we know that the root aka. first element in array of the heap is always the minimum. We just have to keep inserting until we have `k`-elements in the heap and then start doing the swapping with the minimum once we have that. Everytime we swap with the smallest element, we just call `balance()` to get back our min-heap. So the whole algorithm goes:

1. For each word in document, update frequency in dictionary

2. If we don't have `k` elements in the heap, insert the word, frequency pair into the heap

3. Else check if the word we currently have is more frequent than the minimum in the heap

   a. Replace the minimum with the current and then balance the heap if true

This makes the whole algorithm `O(n log k)`, since the balancing of the heap takes at most the height of the heap (if we visualize it in a tree structure) ie. `log k`. The interviewer was satisfied with my overall implementation and proceeded onto the next problem, which I will cover soon in another post.
