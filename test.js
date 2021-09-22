// 1-9の間をとる数の個数
head_num = 4;

// 0-9の間をとる数の個数
body_num = 6;

// 数が満たすべき関係式
target_func = function (
	R,E,A,D,W,I,T,L,K,S // 1-9の間をとる数を最初にまとめて引数とする
){
	return (
		dig2num( R,E,A,D )
        +
        dig2num( W,R,I,T,E )
        +
        dig2num (T,A,L,K)
		==
		dig2num( S, K, I, L, L )
	);
};