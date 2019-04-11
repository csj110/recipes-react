import React, { Component } from 'react';
import { recipe } from '../tempDetails';

export default class RecipeDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			recipe: recipe,
      url: '',
      id:this.props.id
		};
	}
	render() {
    const { f2f_url, image_url, ingredients, publisher, source_url, publisher_url, title } = this.state.recipe;
    const { handleIndex } = this.props;

		return (
			<React.Fragment>
				<div className="container">
					<div className="row">
						<div className="col-10 mx-auto col-md-6 my-3">
              <button
              onClick={()=>{handleIndex(1)}}  
                type="button" className="btn btn-warning mb-5 text-capitalize">
								go back to recipe list
              </button>
              <img src={image_url} alt='' className='d-blcok w-100'/>
            </div>
            <div className="col-10 mx-auto col-md-6 my-3">
              <h6 className="text-uppercase">{title}</h6>
              <h5 className="text-warning text-capitalize text-slanted">provided by : {publisher}</h5>
              <a href={publisher_url} target='_blank' rel='noopener noreferrer' className='btn btn-primary mt-2 text-capitalize'>publisher webpage</a>
              <a href={source_url} target='_blank' rel='noopener noreferrer' className='btn btn-success mx-3 mt-2 text-capitalize'>recipe url</a>
              <ul className="list-group mt-4">
                <h2 className='mt-2 mb-4'>Ingredients</h2>
                {
                  ingredients.map((item, index) => (
                    <li key={index} className='list-group-item text-slanted'>
                      {item}
                    </li>
                  ))
                }
              </ul>
            </div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
