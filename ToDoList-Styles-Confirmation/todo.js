function Todo({todo,index,remove}){
  function handle(){
    const confirmResult = window.confirm(`Are you sure you want to remove "${todo.text}"?`);
    if (confirmResult) {
    console.log('Ping:',index);
    remove(index);
  }
}
  return (
    <div className="todo">
      <span onClick={handle}>{todo.text} (-)</span>
    </div>
  );
}
