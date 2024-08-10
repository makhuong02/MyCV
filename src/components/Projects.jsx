import React from "react";

function Projects() {
  return (
	<div>
		<h3 className="text-color">Projects</h3>
		<div>
			<h4>Mobile Fashion Shop</h4>
			<div className="element-indentation details-font-size">
				<div className="additional-details">
					<p>Language: Java</p>
					<p className="additional-text">Platform: Mobile (Android)</p>
				</div>
				<p>Number of members: 4</p>
				<p>
					Overview: An android fashion shop allow users order the products
					online. Use by register user account to order, save the favorite
					products, check out products' price and pictures. There are 2
					payment methods for users, ship to the users address (shipping
					fee include) or go to our shop and take away (we have pinned our
					location on Google Maps).
				</p>
				<a href="https://github.com/makhuong02/fashion-app"
					>Link to Project</a
				>
			</div>
		</div>

		<div className="project-spacing">
			<h4>Windows Mobile Shop</h4>
			<div className="element-indentation details-font-size">
				<div className="additional-details">
					<p>Language: C#</p>
					<p className="additional-text">Platform: Windows</p>
				</div>
				<p>Number of members: 3</p>
				<p>
					Overview: A Windows application about mobile shop. For users, an
					user account is required to use this application. Analyze the
					best seller products in month. Show the statistics for the admin
					about the income, list of the sold products. Weekly meetings for
					update and using MVVM pattern to manage source code.
				</p>
				<a href="https://github.com/nm-hieu/CSC13001-MyShop"
					>Link to Project</a
				>
			</div>
		</div>
		<hr />
	</div>
  );
}

export default Projects;
