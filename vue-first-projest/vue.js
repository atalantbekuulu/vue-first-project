const App = {
    data(){
        return{
            counter: 0,
            title: "Список заметок",
            NewPlaceholder:"Введите название",
            inputValue:'',
            notes:['заметка-1','заметка-2','заметка-3',]
        }
    },
    methods:{
        
        addNewNote(){
            this.notes.push(this.inputValue)
            this.inputValue =''
        },
        delNote(index){
            this.notes.splice(index,1)
        },
        toUpperCase(item){
            return item.toUpperCase()
        }
    }
}
Vue.createApp(App).mount('#app')