import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() searchValueEmitter = new EventEmitter();
  searchForm:FormGroup = new FormGroup(
    {"search": new FormControl(),}
  );
  constructor() { }

  ngOnInit(): void {
    this.searchForm.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(searchLetter => {
        this.searchValueEmitter.emit(searchLetter.search)
      });
  }

}
