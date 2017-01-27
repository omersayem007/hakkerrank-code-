#include<iostream>
using namespace std;

int output(int ara[], int n)

{

int  i;

 cout<<" Sorted "<<endl;
    for(i=0; i<n; i++)
    {
        cout<<ara[i]<<endl;

    }

}

  int insertion(int ara[], int n )
{
    int i,h,v;

    for(i=n-1; i>=0; i--)
    {
        v=ara[i];
        h=i;
        while(h>0 && ara[h-1]>v)
        {
            ara[h]=ara[h-1];
            output(ara,n);
            h--;

        }
        ara[h]=v;
    }
      output(ara,n);

}



int main ()
{
int n,i;
    cout<<"Enter the range of the array: "<<endl;
    cin>>n;

    int ara[n];

    cout<<"Enter "<<n<<" elements in the array: "<<endl;

    for(i=0; i<n; i++)
    {
        cin>>ara[i];
    }

    insertion(ara,n);


   return 0;
   }
