/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package triiangulo.pascal;

import java.util.Scanner;

/**
 *
 * @author jhonatan
 */
public class TriianguloPascal {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
          Scanner entrada = new Scanner(System.in);
        System.out.print("Digite o tamanho do Triangulo de Pascal:");
        int n = Integer.parseInt(entrada.nextLine());

        int largura = n;
        int altura = n;

    int[] matriz = new int[altura * largura];

    for (int linha = 0; linha < altura; linha++){
            for (int coluna = 0; coluna <= linha; coluna++){
               int passalista = (linha * largura) + coluna;

                if(coluna == 0 || linha == coluna){
                    matriz[passalista] = 1;
                }
                else{
                    matriz[passalista] = matriz[(linha - 1)*altura + coluna] + matriz[(linha - 1)*altura  + coluna - 1];
                }    

                System.out.print("\t" + matriz[passalista]);
            }   
            System.out.println("");
        }
    }
    
}
