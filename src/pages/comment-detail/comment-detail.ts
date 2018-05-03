import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Comment } from '../../models/comment';

/**
 * Generated class for the CommentDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comment-detail',
  templateUrl: 'comment-detail.html',
})
export class CommentDetailPage {

  private comment: Comment;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController) {

    this.comment = navParams.get('commentData');
  }

  public closeModal() {
    this.viewCtrl.dismiss();
  }

}
