import { useParams } from "react-router-dom";

function EachRepo() {
  const { id } = useParams();
  return (
    <div className="container my-5">
      <div className="card w-100">
        <div className="card-body">
          <h5 className="card-title fw-bold">TITLE {id}</h5>
          <p className="card-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
            sequi sint iste ipsum, temporibus blanditiis ullam aut animi. Modi
            maiores recusandae repudiandae minus laudantium hic amet pariatur
            porro assumenda sit. Harum consequatur deleniti, deserunt quod ullam
            laudantium nihil sapiente qui quae ipsum nesciunt beatae alias
            ducimus maiores expedita sunt sed amet necessitatibus, quidem in
            eligendi sequi facilis. Debitis, quas quis. Fuga eveniet, architecto
            consectetur consequatur praesentium ipsam autem repellat error vitae
            exercitationem tenetur repudiandae quos dolorum consequuntur aliquam
            dignissimos distinctio laudantium odit quis deleniti ullam tempore
            vel sequi incidunt? Repudiandae.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Owned by : </li>
          <li className="list-group-item">fork : </li>
          <li className="list-group-item">Created at : </li>
          <li className="list-group-item">Updated at : </li>
          <li className="list-group-item">Pushed at : </li>
          <li className="list-group-item">Homepage : </li>
          <li className="list-group-item">Visiblity : </li>
          <li className="list-group-item">Watchers : </li>
          <li className="list-group-item">Default branch : </li>
        </ul>
      </div>
    </div>
  );
}

export default EachRepo;
