import {Component, Input, OnInit} from '@angular/core';
import {FroalaEditorDirective} from "angular-froala-wysiwyg";
//import FroalaEditor from 'froala-editor';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'EditorTest';

  editor: any

  ngOnInit() {
    this.editor = {
      toolbarButtons: ['fullscreen', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|',
        'fontFamily', 'fontSize', 'color', 'inlineStyle', 'paragraphStyle', '|',
        'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '-',
        'insertLink', 'insertImage', 'insertVideo', 'insertFile', 'insertTable', '|',
        'emoticons', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '|',
        'print', 'getPDF', 'help', 'html', '|', 'undo', 'redo','trackChanges','markdown']
    };
  }
}
