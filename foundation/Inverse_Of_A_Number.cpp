#include <iostream>
#include <math.h>
using namespace std;

int main(int argc, char **argv)
{
    int n;
    cin >> n;

    // write your code here
    int inverse = 0;
    int num = n;
    int count = 1;

    while (num > 0)
    {
        int rem = num % 10;
        inverse += count * pow(10, rem - 1);
        num = num / 10;
        count++;
    }

    cout << inverse;
}