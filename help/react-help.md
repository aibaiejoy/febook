## react 生命周期

1. componentWillMount : 服务器端和客户端只执行一次，如果在这个方法内调用setState，`render()`将会感知更新后的state。将会执行仅一次。
2. componentDidMount : render 后执行，组件拥有一个dom展现，可以使用getDOMNode()来获取相应的结点。
3. shouldComponentUpdate : 当组件props、state发生变化时，调用此方法比较前后值，返回false将阻止render方法执行，并阻止componentWillUpdate、componentDidUpdate执行；
4. componentWillUpdate(object prveProps, object prevSate) : 比较容易理解，组件在被更新前调用，第一次初始化时，并不执行。
5. componentDidUpdate(object prevProps, object prevState) : 组件更新并同步到dom后调用。 
6. componentWillUnmount : 在组件从Dom中移除时立刻被调用。


