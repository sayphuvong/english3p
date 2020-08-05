import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import RepresentCard from '../../components/represent-card';

class RepresentCardContainer extends React.PureComponent {
    handleRepresentCardClick = () => {
        
    }
    
    render() {
        const { thumbnail, title, linkTo } = this.props;
        return (
            <div className="represent-card-container">
                <Link to={linkTo} onClick={this.handleRepresentCardClick}>
                    <RepresentCard
                        thumbnail={thumbnail}
                        title={title}
                    />
                </Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    
});

const mapDispatchToProps = (dispatch) => ({
    
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RepresentCardContainer));
