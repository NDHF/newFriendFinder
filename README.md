# newFriendFinder

* Friend Finder will take your response to a series of questions, and compare them to the answers of some lovable scamps. 
* The program will then display the person whose answers most closely resemble yours.

# NOTES

* This app uses POST and GET methods to handle data. 
* A prototype extension is used to help find the closest match (see credits).
* The program adds up the absolute value of the difference between the your response, 
and each response of the potential friends. These are then push to a "sum array."
* The smaller the sum, the closer the match in responses.
* The program will then look for the friend in the array that created the smallest sum.
This person is the closest match. 
* The prototype extension will only find the first instance of the smallest amount
in the array, even if multiple items share that value. For example, if given the
array [4, 5, 3, 1, 1, 1, 2], the method will say array[3] is the smallest value.

# Credits

* The array prototype extension, which finds the smallest value in an array,
was taken from an article by John Resig: https://johnresig.com/blog/fast-javascript-maxmin/ 

# Deviations from instructions

* There is only one html page, instead of different home and survey pages.
* The main logic for determining the closest match is done in a script element in the home.html file.
* This script uses a .get method to get the array of candidates.