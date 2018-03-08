import React from 'react';

import UserLevel from '../UserLevel';
import AvatarImages from '../AvatarImage';

import './tiles.scss';

const Tiles = () => (
    <div className="tiles">
        <div className="tiles__header">
            Successful
        </div>
        <div className="tiles__content">
            <table className="table">
                <thead className="table__header">
                    <tr>
                        <th />
                        <th>Followers</th>
                        <th>Last 30 days</th>
                    </tr>
                </thead>

                <tbody className="table__body">
                    <tr className="table__tr">
                        <td className="table__td table__td--first">
                            <span className="table__avatar-img">
                                <AvatarImages size={AvatarImages.size.SMALL} />
                            </span>
                            <span>Nicolas May</span>
                            <UserLevel level={1} />
                        </td>
                        <td className="table__td">222</td>
                        <td className="table__td table__td--green">+10%</td>
                    </tr>
                    <tr className="table__tr">
                        <td className="table__td table__td--first">
                            <span className="table__avatar-img">
                                <AvatarImages size={AvatarImages.size.SMALL} />
                            </span>
                            <span>Nicolas May</span>
                            <UserLevel level={1} />
                        </td>
                        <td className="table__td">222</td>
                        <td className="table__td table__td--green">+10%</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="tiles__more">
            View more
        </div>
    </div>
);

export default Tiles;
