import { Component, OnInit } from '@angular/core';
import { projetoService } from 'src/projetoService.service';
import { projetoModel } from 'src/projeto.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.page.html',
  styleUrls: ['./adm.page.scss'],
})
export class AdmPage implements OnInit {
  public criado:boolean = false;
  public produtosList:projetoModel[];
  public produtoAtual: projetoModel;
  public indexAtual = -1;
  public title = '';

  produtos?:projetoModel = {
    titulo: '',
    complemento: '',
    formaPagamento: '',
    status: false,
    produto_status: '',
    valor: '',
    pedido: '',
    ativo: false,
    orc: '',
    data: '',
    situacao: '',
    imagens: []
  };

  constructor(private service:projetoService,
    private route: ActivatedRoute,
    private router: Router) { }

      ngOnInit() {
      this.receberLista()
      }

  public adicionar():void{
    const data = {
      titulo: this.produtos.titulo,
      complemento:  this.produtos.complemento,
      formaPagamento:  this.produtos.formaPagamento,
      status:  this.produtos.status,
      produto_status:  this.produtos.produto_status,
      valor:  this.produtos.valor,
      pedido:  this.produtos.pedido,
      ativo:  this.produtos.ativo,
      orc:  this.produtos.orc,
      data:  this.produtos.data,
      situacao:  this.produtos.situacao,
    };
    this.service.create(data).subscribe(Response =>{
      this.criado = true;
    },error=>{
      console.log(error);
    })
  }
  public receberLista(){
    this.service.getAll().subscribe(data=>{
      this.produtosList = data
    },error=>{
      console.log(error)
    })
  }

  public atualizarLista():void{
    this.produtoAtual = undefined
    this.indexAtual = 1;
  }
  public ativarLista(produto:projetoModel,index:number):void{
    this.produtoAtual = produto;
    this.indexAtual = index;
  }
  public deletar():void{
    this.service.delete(this.produtoAtual.id).subscribe(response=>{
      console.log(response)
      this.router.navigate(['/adm']);
    })
  }

  public novoProduto():void{
    this.criado = false;
    this.produtos = {
      titulo: '',
      complemento: '',
      formaPagamento: '',
      status: false,
      produto_status: '',
      valor: '',
      pedido: '',
      ativo: false,
      orc: '',
      data: '',
      situacao: '',
      imagens: []
    }
  }
  

  

}
