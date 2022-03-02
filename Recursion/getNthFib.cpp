#include <bits/stdc++.h>

// using namespace std;

//!  O(n) Time | O(n) Space

// int getNthFib(int n) {
//     if ( n == 1) return 0;
//     else if (n == 2) return 1;
//     else
//         return getNthFib(n - 1) + getNthFib(n - 2);
// }

// int main () {
// for (size_t i = 1; i <= 10; i++)
// {
//     cout << getNthFib(i) << " ";
// }


// }

using namespace std;

int getNthFib(int n)
{
    // Write your code here.
    int lastTwo[2] = {0, 1};
    int counter = 3;
    while (counter <= n)
    {
        int nextFib = lastTwo[0] + lastTwo[1];
        lastTwo[0] = lastTwo[1];
        lastTwo[1] = nextFib;
        counter += 1;
    }
    return n > 1 ? lastTwo[1] : lastTwo[0];
}

int main () {

    cout << getNthFib(3) ;
    return 0;
}
