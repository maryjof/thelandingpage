import React from "react";
import { Jumbotron, Button, CardGroup, Card } from "react-bootstrap";
import "../../styles/home.scss";

export const Home = () => (
	<div style={{ padding: "3rem" }}>
		<Jumbotron>
			<h1 style={{ fontSize: 70 }}>A Warm Welcome!</h1>
			<p>Welcome to my first landing page.</p>
			<p>
				It has been a little challenging to finish this project. On the other hand, I am liking this coding life
				more and more each day.
			</p>
			<p>
				<Button variant="primary">Call to Action</Button>
			</p>
		</Jumbotron>

		<CardGroup>
			<Card style={{ margin: "1rem" }}>
				<Card.Img variant="top" src="http://placehold.it/500x325" />
				<Card.Body>
					<Card.Title>Card title</Card.Title>
					<Card.Text>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore
						debitis beatae culpa natus architecto.
					</Card.Text>
				</Card.Body>
				<Button variant="primary" size="lg">
					Find out more!
				</Button>
			</Card>

			<Card style={{ margin: "1rem" }}>
				<Card.Img variant="top" src="http://placehold.it/500x325" />
				<Card.Body>
					<Card.Title>Card title</Card.Title>
					<Card.Text>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore
						debitis beatae culpa natus architecto.
					</Card.Text>
				</Card.Body>
				<Button variant="primary" size="lg">
					Find out more!
				</Button>
			</Card>
			<Card style={{ margin: "1rem" }}>
				<Card.Img variant="top" src="http://placehold.it/500x325" />
				<Card.Body>
					<Card.Title>Card title</Card.Title>
					<Card.Text>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore
						debitis beatae culpa natus architecto.
					</Card.Text>
				</Card.Body>
				<Button variant="primary" size="lg">
					Find out more!
				</Button>
			</Card>
			<Card style={{ margin: "1rem" }}>
				<Card.Img variant="top" src="http://placehold.it/500x325" />
				<Card.Body>
					<Card.Title>Card title</Card.Title>
					<Card.Text>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore
						debitis beatae culpa natus architecto.
					</Card.Text>
				</Card.Body>
				<Button variant="primary" size="lg">
					Find out more!
				</Button>
			</Card>
		</CardGroup>
	</div>
);
