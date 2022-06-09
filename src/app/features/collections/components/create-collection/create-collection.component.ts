import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CollectionsService } from '@app/core/collections/collections.service';
import { CollectionsComponentService } from '../../services/collections-component.service';
import { FormService } from './form.service';

@Component({
  selector: 'movie-create-collection',
  templateUrl: './create-collection.component.html',
  styleUrls: ['./create-collection.component.scss'],
  providers: [FormService, CollectionsComponentService, CollectionsService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateCollectionComponent implements OnInit {

  form!: FormGroup;
  constructor (
    private readonly formService: FormService,
    private readonly collectionsComponentService: CollectionsComponentService,
  ) { }

  ngOnInit (): void {
    this.form = this.formService.buildForm();
  }

  save () {
    console.log('event: ', this.form.value);
    this.collectionsComponentService.save(this.form.value);
  }

}
