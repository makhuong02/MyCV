import React from "react";

function Profile() {
    return (
        <div>
            <h3 className="text-color">Profile</h3>
            <div>
                <p>
                    <span className="material-symbols-outlined text-color">
                        calendar_month
                    </span>
                    25/05/2002
                </p>
            </div>
            <div>
                <p>
                    <span className="material-symbols-outlined text-color"> call </span>
                    0394169463
                </p>
            </div>
            <div>
                <p>
                    <span className="material-symbols-outlined text-color"> mail </span>
                    khuongluan.work@gmail.com
                </p>
            </div>
            <div>
                <p>
                    <span className="material-symbols-outlined text-color">
                        location_on
                    </span>
                    An Binh, Bien Hoa, Dong Nai
                </p>
            </div>
            <hr />
        </div>
    );
}

export default Profile;
