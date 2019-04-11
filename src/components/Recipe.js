import React, { Component } from 'react';

export default class Recipe extends Component {
	render() {
		const { image_url, title, publisher, source_url, recipe_id,handleDetail } = this.props;
		return (
			<React.Fragment>
				<div className="col-10 max-auto col-md-6 col-lg-4 my-3">
					<div className="card">
						<img className="img-card-top" style={{ height: '14rem' }} src={image_url} alt="recipe" />
						<div className="card-body text-capitalize">
							<h6>{title}</h6>
							<h6 className="text-warning text-slanted">provided by {publisher}</h6>
						</div>
						<div className="card-footer">
              <button type="button"
                onClick={()=>handleDetail(0,recipe_id)} 
                className="btn btn-primary text-capitalize">
								details
							</button>
              <a href={source_url} className="btn btn-success mx-2 text-capitalize"
              target='_blank' rel='noopener noreferrer'
              >
                recipe url
              </a>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
