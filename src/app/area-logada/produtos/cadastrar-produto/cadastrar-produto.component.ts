import { ProdutosService } from './../produtos.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Produto } from '../produto.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { take, finalize } from 'rxjs';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit{
  idProduto: String | null;
  produtoForm: FormGroup;

  estaCarregando: boolean;
  erroNoCarregamento: boolean;

  constructor(
    private produtosService: ProdutosService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
    ) {}

    ngOnInit(): void {
     this.inicializaForm();

     this.idProduto = this.activatedRoute.snapshot.paramMap.get('id');
     if(this.idProduto){
      this.carregarProduto();
     }
    }

    inicializaForm(){
      this.produtoForm = this.formBuilder.group({
        id:['', Validators.required],
        name:['', Validators.required],
        description:['',Validators.required],
        price:['',Validators.required],
        quantity:['',Validators.required]
      });
    }

    alterandoProduto = () => Boolean(this.idProduto);

    carregarProduto(){
      this.estaCarregando = true;
      this.erroNoCarregamento = false;

      const idProduto = this.activatedRoute.snapshot.paramMap.get('id');

      this.produtosService
        .pegarProdutoId(idProduto)
        .pipe(
          take(1),
          finalize(() => (this.estaCarregando = false))
        )
        .subscribe({
          next:(resposta: Produto) => this.onSucessoCarregarProduto(resposta),
          error:(erro) => this.onErroCarregarProduto(erro),
        });
      }   

  onSucessoCarregarProduto(resposta: Produto){
    this.produtoForm.patchValue(resposta);
  }

  onErroCarregarProduto(erro: any){
    this.erroNoCarregamento = true;
    // console.log(erro)
  }

  validarCampos(){
    Object.keys(this.produtoForm.controls).forEach((campo) => {
      const controle = this.produtoForm.get(campo);
      controle?.markAsTouched();
    });
  }

  onSubmit(){
    if(this.produtoForm.invalid){
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
    this.produtosService
      .alterarProduto(this.idProduto, this.produtoForm.value)
      .subscribe({
        next: () => this.onSucessoSalvarProduto(),
        error: () => this.onErroSalvarProduto(),
      });
  }

  onSucessoSalvarProduto(){
    alert('Produto atualizado com sucesso!');
    this.router.navigate(['produtos']);
  };

  onErroSalvarProduto(){
    alert('Ocorreu um erro ao atualizar o produto!');
  };

  cadastrarProduto(){
    this.produtosService.cadastrarProduto(this.produtoForm.value).subscribe({
      next: () => this.onSucessoCadastrarProduto(),
      error: () => this.onErroCadastrarProduto(),
    });
  };

  onSucessoCadastrarProduto(){
    alert('Produto castrado com sucesso!');
    this.router.navigate(['produtos']);
  };

  onErroCadastrarProduto(){
    alert('Ocorreu um erro ao cadastrar o produto!');
  };
}

