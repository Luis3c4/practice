
interface MyBottomProps {
    label: number,
    count: ()=>void;
}
export default function MyBottom({label,count}:MyBottomProps) {

    return <button onClick={count}>
            Click {label} 
          </button>
  }