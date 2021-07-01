import { Component, ViewChild } from '@angular/core';
import { ConfirmationModalComponent } from './shared/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'modal-reusable';

  @ViewChild('confirmationModal') private modalComponent!: ConfirmationModalComponent;

  modalStyle: string = 'modal-style-success';
  modalTitle: string = 'Success Confirmation';
  modalBody: string = 'This is a Success Confirmation message';
  modalButtonColor: string = 'btn-success';

  async openModal(){
    return await this.modalComponent.open();
  }

  getConfirmationValue(value: any){
    if (value == 'Save click') {
      console.log(value);
      
    }
  }

  open(){
    this.openModal()
  }
}
