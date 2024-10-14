import RecentCourseLayout from "./RecentCourseLayout.jsx";
import RecentCourseRow from "./RecentCourseRow.jsx";
import {RecentCourseExamination} from "../utils/Constants.js";

export default function RecentCourses() {
    return <RecentCourseLayout>
        {
            RecentCourseExamination.map((recentCourse) => (
                <RecentCourseRow
                    key={recentCourse.Id}
                    CandidateName={recentCourse.Name}
                    Date={recentCourse.Date}
                    LicenseType={recentCourse.LicenseType}
                    AircraftType={recentCourse.AircraftType}
                    StaffName={recentCourse.StaffName}
                    Exam={recentCourse.ExamStatus}
                    RoomIndex={recentCourse.RoomIndex}
                    Absence={recentCourse.Absence}
                />
            ))
        }

    </RecentCourseLayout>;
}
