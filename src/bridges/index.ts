function test(arg:any){
  return 'test:'+arg
}
const brigetContext:Record<string,Function> = {
  test
}
export default brigetContext