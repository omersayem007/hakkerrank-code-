#include<iostream>
using namespace std;



/*int bubblesort( int a[], int n)

{
int pass, i ,swap  ;
for(pass=1;pass<n;pass++)
    {
for(i=0;i<(n-1);i++)

    if( a[i]>a[i+1] )
			  swap       = a[i];
        a[i]   = a[i+1];
        a[i+1] = swap;
      }
    }*/


  int insertion(int ara[], int n )
{
    int i,h,v;

    for(i=1; i<=n-1; i++)
    {
        v=ara[i];
        h=i;
        while(h>0 && ara[h-1]>v)
        {
            ara[h]=ara[h-1];
            h--;
        }
        ara[h]=v;
    }

}

/*int selectionsort(int a[], int n)
{

    int i,j,z, ara[100];


for (int i = 0; i < n -1; i++)
    {

		for (int j = i+1; j < n; j++)
        {

			if (ara[i] > ara[j])
			{
				z = ara[i];
				ara[i] = ara[j];
				ara[j] = z;
			}
        }
    }
    }*/






 int output(int ara[], int n)

{

int  i;

 cout<<" Sorted "<<endl;
    for(i=n-1; i>=0; i--)
    {
        cout<<ara[i]<<endl;

    }

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

   output(ara,n);
   return 0;
   }
