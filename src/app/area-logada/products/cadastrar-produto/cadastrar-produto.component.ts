import { ProductsService } from '../products.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../product.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { take, finalize } from 'rxjs';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit{
  idProduct: String | null;
  productForm: FormGroup;

  estaCarregando: boolean;
  erroNoCarregamento: boolean;

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
    ) {}

    ngOnInit(): void {
     this.inicializaForm();

     this.idProduct = this.activatedRoute.snapshot.paramMap.get('id');
     if(this.idProduct){
      this.carregarProdutos();
     }
    }

    inicializaForm(){
      this.productForm = this.formBuilder.group({
        name:['', Validators.required],
        description:['',Validators.required],
        price:['',Validators.required],
        quantity:['',Validators.required]
      });
    }

    alterandoProduto = () => Boolean(this.idProduct);

    exibeErro(nomeControle: string) {
      if (!this.productForm.get(nomeControle)) {
        return false;
      }
  
      return (
        this.productForm.controls[nomeControle].invalid &&
        this.productForm.controls[nomeControle].touched
      );
    }

    carregarProdutos(){
      this.estaCarregando = true;
      this.erroNoCarregamento = false;

      const idProduct = this.activatedRoute.snapshot.paramMap.get('id');

      this.productsService
        .pegarProdutoId(idProduct)
        .pipe(
          take(1),
          finalize(() => (this.estaCarregando = false))
        )
        .subscribe({
          next:(resposta: Product) => this.onSucessoCarregarProdutoscarregarProdutos(resposta),
          error:(erro) => this.onErroCarregarProdutoscarregarProdutos(erro),
        });
      }   

    onSucessoCarregarProdutoscarregarProdutos(resposta: Product){
      this.productForm.patchValue(resposta);
    }

    onErroCarregarProdutoscarregarProdutos(erro: any){
      this.erroNoCarregamento = true;
      console.log(erro)
    }

  validarCampos(){
    Object.keys(this.productForm.controls).forEach((campo) => {
      const controle = this.productForm.get(campo);
      controle?.markAsTouched();
    });
  }

  onSubmit(){
    if(this.productForm.invalid){
      this.validarCampos();
      return;
    }
    if(this.alterandoProduto()){
      this.salvarProduto();
      return;
    }
    this.cadastrarProduto();
  }

  salvarProduto(){
    this.productsService
      .alterarProduto(this.idProduct, this.productForm.value)
      .subscribe({
        next: () => this.onSucessoSalvarProduto(),
        error: () => this.onErroSalvarProduto(),
      });
  }

  onSucessoSalvarProduto(){
    alert('Produto atualizado com sucesso!');
    this.router.navigate(['products']);
  };

  onErroSalvarProduto(){
    alert('Ocorreu um erro ao atualizar o produto!');
  };

  cadastrarProduto(){
    this.productsService.cadastrarProduto(this.productForm.value).subscribe({
      next: () => this.onSucessoCadastrarProduto(),
      error: () => this.onErroCadastrarProduto(),
    });
  };

  onSucessoCadastrarProduto(){
    alert('Produto castrado com sucesso!');
    this.router.navigate(['products']);
  };

  onErroCadastrarProduto(){
    alert('Ocorreu um erro ao cadastrar o produto!');
  };

  voltar() {
    this.router.navigate(['products'])
  }
}

