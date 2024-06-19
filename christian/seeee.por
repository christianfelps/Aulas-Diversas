programa
{
	
	funcao inicio()
	{
		real c1, c2, c3
		c1 = 1233.25
		c2 = 1456.29
		c3 = 2100
		se(c1 > c2 e c1 > c3) 
		{
			escreva("O cliente 1 tem o maior valor de ", c1)
		}senao se(c2 > c1 e c2 > c3)
		{
			escreva("O cliente 2 tem o maio valor de ",c2)
		}
		senao 
		{
			escreva("O cliente 3 tem o maio valor de ",c3)
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 0; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */