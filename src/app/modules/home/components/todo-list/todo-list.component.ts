import { Component, DoCheck } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck{
  
  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');
  ngDoCheck(){
    this.setLocalStorage();
  }
 
  public setEmitItemTaskList(Event: string){
    this.taskList.push({task: Event, checked: false})

  };

  public deleteItemTaskList(Event: number){
    this.taskList.splice(Event, 1)

  }

  public deleteAllTaskList(){
    const confirm = window.confirm("Você realmente deseja exluir todos os itens da lista?")
    if(confirm){
    this.taskList= [];
    }
  }

  public validationInput(event:string, index:number){
    if(!event.length){
      const confirm = window.confirm("Campo vazio, deseja deletá-lo?");
        if(confirm){
          this.deleteItemTaskList(index);
         }
     }
    }

    public setLocalStorage(){

      if(this.taskList){
        this.taskList.sort((first, last)=> Number(first.checked) - Number(last.checked)); 
        localStorage.setItem("list", JSON.stringify(this.taskList));
      }
    }
  

}
