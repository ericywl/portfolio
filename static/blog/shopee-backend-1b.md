---
title: "Shopee Backend SWE Interview R1-B"
date: "2019-11-19"
---

This is a continuation from my previous blog post on [Shopee's Backend SWE Interview](/blog/shopee-backend-1a/).
After the first coding question, I was then asked to design the backend for an application like PayLah. The requirements of the application are as follow:

1. Each user account has a balance.

2. Users can send or receive money.

3. Users should be able to view past transactions.

The first thing I was asked was my choice of database -- relational or non-relational. I thought about it for a while and the answer seemed obvious. Since we want to be able to fetch transactions that are associated to a particular user ID, we should use relational databases like MySQL. Using non-relational databases may mean storing transactions twice in both the sender and the receiver's document, so that's not good.

I was then asked to create the necessary tables for the backend, which I did -- `USER` table and `TRANSACTIONS` table, with the necessary columns. The interviewer probed further and tested some of my SQL knowledge. I was fairly unprepared for this, since I haven't had to touch raw SQL for quite some time. But nevertheless, I managed to answer the SQL query questions. However, the next question really surprised me.

> Do you know how indexes are stored in SQL?

## Hash Tables or Trees

When I think of indexes, only hashing comes into mind, so that's what I answered. And certainly, for things like ID, hash tables are a good way to store those. But after some hinting from the interviewer, I realized that in order for the application to be able to access transactions from a certain time period, we have to index `TIMESTAMPS` as well. There is no way we can perform quick access of `TIMESTAMPS` if we used hashing, since there are potentially infinite intervals within a time period. This led me to think that the indexing is done with a tree, since the tree structure seems to do well in this kind of context. But of course, I have no idea about the details.

<center>
   <img src="../images/b+tree.png" alt="Example of a B+Tree from SQLify" /><br>
</center>

The interviewer was kind enough to explain about this to me. Apparently, SQL uses B+Trees for its index storage. B+Tree is essentially an N-ary tree with variable number of children per node. What's interesting about B+Tree is that the leaves of the tree are often linked to one another, allowing for a more efficient element iteration as compared to ordinary trees. I won't talk too much about B+Tree here, you can find out more on the [Wiki](https://en.wikipedia.org/wiki/B%2B_tree).

## API Design

After the series of questions on the database of the backend, the interviewer asked for the API. Here is roughly what I wrote on the whiteboard:

```python
def create_user(user_details):
    # return new user ID
    pass

def transfer(sender, receiver, amount):
    # user checks ie. ID, balance etc.
    # create new transaction
    pass

def get_transactions(user, first=None, last=None):
    # assuming FETCH_TXN function fetches from database
    txn = FETCH_TXN(user)
    # pagination
    if first:
        txn = txn[first:]
    if last:
        txn = txn[:last]
    # can be extended to support timestamp as well
    return txn
```

I talked in detail about the API design with the interviewer and she seemed to be fine with it. Due to time constraint, we also had to move on to the last question.

## HTTPS and TLS

The last question was about HTTPS, specifically what differentiates HTTP and HTTPS. Since I did some research on this when I was working in Continental as a cybersecurity research intern, I was fairly confident. I talked about the main thing that HTTPS has over HTTP: TLS. HTTPS traffic is encrypted using Transport Layer Security (TLS), which means unauthorized parties shouldn't be able to read the messages between client and server. While it is still technically doable with some certificate hacks, it is now much more difficult for adversaries to snoop HTTPS traffic simply using attacks like man-in-the-middle.

> So, does HTTPS use symmetric or asymmetric encryption?

I answered that HTTPS uses symmetric encryption to encrypt the traffic data. However, the key for the symmetric encryption is negotiated using techniques similar to asymmetric encryption like RSA. "Specifically, I believe HTTPS uses Diffie-Hellman key exchange."

> Can you tell me more about this Diffie-Hellman key exchange?

Oh no. I don't remember the exact details of Diffie-Hellman. I knew that the underlying principles are the same as RSA, where prime number modulus is used, but I don't remember the specifics. I talked about it as best as I could but well, you can't explain something you don't remember. After this, I was asked about some simple questions on certificates and certificate authorities and that marks the end of the interview.

## Interview Results

I was pleasantly surprised when I was informed that I passed this first interview and that a follow-up interview will be scheduled. I may post about the 2nd and 3rd interview in the future when I have the time, so stay tuned.

