import { Component } from "react";

class MovieCard extends Component {
  render() {
    return (
      <div className="card h-100">
        <img
          src={this.props.movie.image_url}
          className="card-img-top"
          alt="skilvul"
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.movie.title}</h5>
          <h6 className="card-subtitle mb-2">
            <span
              className={
                this.props.movie.type === "TV"
                  ? `badge bg-danger`
                  : "badge bg-success"
              }
            >
              {this.props.movie.type}
            </span>
          </h6>
          <p className="card-text">input apa saja</p>
        </div>
        <div className="card-body">
          <a
            href={this.props.movie.url}
            className="btn btn-primary w-100 text-uppercase"
          >
            readmore
          </a>
        </div>
      </div>
    );
  }
}

export default MovieCard;
