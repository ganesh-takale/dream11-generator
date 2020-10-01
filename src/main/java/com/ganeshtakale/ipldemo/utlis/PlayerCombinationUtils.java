package com.ganeshtakale.ipldemo.utlis;

import com.ganeshtakale.ipldemo.bean.PlayerBean;

import java.util.ArrayList;
import java.util.List;

public class PlayerCombinationUtils {

	static void combinationUtil(int arr[], int data[], int start,
			int end, int index, int r)
	{
		// Current combination is ready to be printed, print it
		if (index == r)
		{
			for (int j=0; j<r; j++)
				System.out.print(data[j]+" ");
			System.out.println("");
			return;
		}

		// replace index with all possible elements. The condition
		// "end-i+1 >= r-index" makes sure that including one element
		// at index will make a combination with remaining elements
		// at remaining positions
		for (int i=start; i<=end && end-i+1 >= r-index; i++)
		{
			data[index] = arr[i];
			combinationUtil(arr, data, i+1, end, index+1, r);
		}
	}

	// The main function that prints all combinations of size r
	// in arr[] of size n. This function mainly uses combinationUtil()
	static void printCombination(int arr[], int n, int r)
	{
		// A temporary array to store all combination one by one
		int data[]=new int[r];

		// Print all combination using temprary array 'data[]'
		combinationUtil(arr, data, 0, n-1, 0, r);
	}

	public static void main (String[] args) {
		int arr[] = {1, 2, 3, 4, 5};
		int r = 2;
		int n = arr.length;
		printCombination(arr, n, r);
	}

	public static List<List<PlayerBean>> createCombination(List<PlayerBean> p, int n, int r){
		List<List<PlayerBean>> combo = new ArrayList<>();
		PlayerBean[] pp = new PlayerBean[p.size()];
		pp = p.toArray(pp);
		PlayerBean[] data =new PlayerBean[r];
		playerCombinationUtil(pp, data, 0, n-1, 0, r,combo);
		return combo;
	}

	public static void playerCombinationUtil(PlayerBean[] p, PlayerBean[] d, int start,
			int end, int index, int r, List<List<PlayerBean>> combo)	{
		// Current combination is ready to be printed, print it
		if (index == r) {
			List<PlayerBean> players = new ArrayList<>();
			for (int j=0; j<r; j++) {
				players.add(d[j]);
			}
			combo.add(players);
			return;
		}

		// replace index with all possible elements. The condition
		// "end-i+1 >= r-index" makes sure that including one element
		// at index will make a combination with remaining elements
		// at remaining positions
		for (int i=start; i<=end && end-i+1 >= r-index; i++) {
			d[index] = p[i];
			playerCombinationUtil(p, d, i+1, end, index+1, r,combo);
		}
	}

	public static List<List<PlayerBean>> combine2List(List<List<PlayerBean>> p1, List<List<PlayerBean>> p2){
		List <List<PlayerBean>> result = new ArrayList<>();
		for (List<PlayerBean> i :p1) {
			for (List<PlayerBean> j : p2) {
				List<PlayerBean> k = new ArrayList<>(i);
				k.addAll(j);
				result.add(k);
			}
		}
		return result;
	}

}
