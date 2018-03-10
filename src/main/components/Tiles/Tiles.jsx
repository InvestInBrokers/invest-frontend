import React from 'react';

import UserLevel from '../UserLevel';
import AvatarImages from '../AvatarImage';

import './tiles.scss';

const Tiles = () => (
    <div className="tiles">
        <div className="tiles__header">
            Successful traders
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
                            <div className="table--center-elem">
                                <span className="table__avatar-img">
                                    <AvatarImages size={AvatarImages.size.SMALL} />
                                </span>
                                <span className="table__fullname">Nicolas May</span>
                                <UserLevel level={1} />
                            </div>
                        </td>
                        <td className="table__td">
                            <span>222</span>
                        </td>
                        <td className="table__td table__td--green">
                            <span>+10%</span>
                        </td>
                    </tr>
                    <tr className="table__tr">
                        <td className="table__td table__td--first">
                            <div className="table--center-elem">
                                <span className="table__avatar-img">
                                    <AvatarImages size={AvatarImages.size.SMALL} />
                                </span>
                                <span className="table__fullname">Nicolas May</span>
                                <UserLevel level={2} />
                            </div>
                        </td>
                        <td className="table__td">
                            <span>222</span>
                        </td>
                        <td className="table__td table__td--green">
                            <span>+10%</span>
                        </td>
                    </tr>
                    <tr className="table__tr">
                        <td className="table__td table__td--first">
                            <div className="table--center-elem">
                                <span className="table__avatar-img">
                                    <AvatarImages size={AvatarImages.size.SMALL} />
                                </span>
                                <span className="table__fullname">Nicolas May</span>
                                <UserLevel level={3} />
                            </div>
                        </td>
                        <td className="table__td">
                            <span>222</span>
                        </td>
                        <td className="table__td table__td--green">
                            <span>+10%</span>
                        </td>
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
