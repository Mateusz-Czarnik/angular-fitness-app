import {ChangeDetectionStrategy, Component, EventEmitter, Output} from "@angular/core";
import {FormArray, FormBuilder, FormControl, Validators} from "@angular/forms";
import {Meal} from "../../../shared/services/meals/meals.service";

@Component({
    selector: 'meal-form',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['meal-form.component.scss'],
    template: `
        <div class="meal-form">
            <form [formGroup]="form"
            >
                <div class="meal-form__name">
                    <label>
                        <h3>Meal name</h3>
                        <input
                                type="text"
                                placeholder="e.g. English breakfast"
                                formControlName="name"
                        >
                        <div class="error" *ngIf="required">
                            Meal name is required
                        </div>
                    </label>
                </div>
                <div class="meal-form__food">
                    <div class="meal-form__subtitle">
                        <h3>Food</h3>
                        <button
                                type="button"
                                class="meal-form__add"
                                (click)="addIngredient()"
                        >
                            <img src="./img/add-white.svg" alt="">
                            Add food
                        </button>
                    </div>
                    <div formArrayName="ingredients">
                        <label *ngFor="let c of ingredients.controls; index as i;">
                            <input [formControlName]="i" placeholder="e.g. Eggs">
                            <span class="meal-form__remove" (click)="removeIngredient(i)"></span>
                        </label>
                    </div>
                </div>
                <div class="meal-form__submit">
                    <div>
                        <button type="button" class="button" (click)="createMeal()">Create meal</button>
                        <a [routerLink]="['../']" class="button button--cancel">Cancel</a>
                    </div>
                </div>
            </form>
        </div>
    `
})

export class MealFormComponent {

    @Output()
    create = new EventEmitter<Meal>()

    form = this.fb.group({
        name: ['', Validators.required],
        ingredients: this.fb.array([''])
    });

    constructor(
        private fb: FormBuilder
    ) {
    }

    get ingredients() {
        return this.form.get('ingredients') as FormArray;
    }

    get required() {
        return (
            this.form.get('name').hasError('required') &&
            this.form.get('name').touched
        )
    }

    createMeal() {
        if (this.form.valid) {
            // console.log(this.form.value)
            this.create.emit(this.form.value)
        }
    }

    addIngredient() {
        this.ingredients.push(new FormControl())
    }

    removeIngredient(index: number) {
        this.ingredients.removeAt(index)
    }
}