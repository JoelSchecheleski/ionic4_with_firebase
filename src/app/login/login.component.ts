import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user: any;
  @ViewChild('usuario') email;
  @ViewChild('senha') password;

  constructor(
      public navCtrl: NavController,
      public toastCtrl: ToastController,
      public firebaseauth: AngularFireAuth
    ) {
      firebaseauth.user.subscribe((data => {
      this.user = data;
      }));
    }

  ngOnInit() {
  }

  /**
   * Tenta realizar o login
   */
  public LoginComEmail(): void {
    this.firebaseauth.auth.signInWithEmailAndPassword(this.email.value , this.password.value)
      .then(() => {
        this.exibirToast('Login efetuado com sucesso');
      })
      .catch((erro: any) => {
        this.exibirToast(erro);
      });
  }

  /**
   * Cadastra um novo usuário no sistema
   */
  public cadastrarUsuario(): void {
    this.firebaseauth.auth.createUserWithEmailAndPassword(this.email.value , this.password.value)
    .then(() => {
      this.exibirToast('Usuário criado com sucesso');
    })
    .catch((erro: any) => {
      this.exibirToast(erro);
    });
  }

  /**
   * Sai da aplicação
   */
  public Sair(): void {
    this.firebaseauth.auth.signOut()
    .then(() => {
      this.exibirToast('Você saiu');
    })
    .catch((erro: any) => {
      this.exibirToast(erro);
    });
  }

  private exibirToast(mensagem: string): void {
    const toast = this.toastCtrl.create({duration: 3000, position: 'botton'});
    // toast.setMessage(mensagem);
    // toast.present();
  }
}
