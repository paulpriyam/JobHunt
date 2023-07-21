import { View, Text, Image, ScrollView, ActivityIndicator } from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { COLORS, SIZES, icons } from "../../constants";
import { ScreenHeaderBtn, JobTabs, Company, JobFooter, Specifics, JobAbout } from "../../components";
import { useCallback, useState } from "react";
import useFetch from "../../hook/useFetch";
import { FlatList } from "react-native-gesture-handler";


const jobResponseBody = {
  status: "OK",
  request_id: "34984ce9-b9b1-448e-865c-16a8f5c3f4b9",
  parameters: {
    job_id: "fFunVwyb9l4AAAAAAAAAAA==",
    extended_publisher_details: false,
  },
  data: [
    {
      employer_name: "SynergisticIT",
      employer_logo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKlgydP7sElaJC9qPrtNHwBhyTMHYgii1RPWsy&s=0",
      employer_website: null,
      employer_company_type: null,
      job_publisher: "ZipRecruiter",
      job_id: "fFunVwyb9l4AAAAAAAAAAA==",
      job_employment_type: "FULLTIME",
      job_title: "Entry Level Python Developer",
      job_apply_link:
        "https://www.ziprecruiter.com/c/SynergisticIT/Job/Entry-Level-Python-Developer/-in-Houston,TX?jid=b5db608a2de13d7e",
      job_apply_is_direct: false,
      job_apply_quality_score: 0.6863,
      job_description:
        "Job Description\n\nAbout Us:\nSynergistic IT is a full-service staffing and placement firm servicing client in America for the past 12+ years. We are dedicated towards fulfilling the IT needs of our clients. From staffing to full implementation of projects we provide the highest quality IT Services. We Intend to deliver exceptional student outcome. We don't just help you secure a tech job but build a solid career in technology.\n\nJob Description:\n• Should know how to work in large verities of libraries, frameworks, and modules\n• Duck typing, string, tuple and Lambda knowledge required\n• Django Frame work required\n• Worked on Django model, CBV, Django CRUD operation\n\nSkills Required-\n• Knowledge of Python web frameworks and event-driven programming in Python.\n• Basic understanding of front-end technologies.\n• High attention to detail.\n• Excellent communication and problem-solving skills.\n• Proficient understanding of code versioning tools\n• Know the classes of SCALA, Traits of SCALA, and Collection of SCALA\n\nEducation Requirement: -\nBachelors, Masters in Computer Science/ Computer Engineering/ Information Systems/Information Technology/ Electrical Engineering/ Mechanical Engineering.\n\nBenefits:\n• On Job Technical support\n• E- verified\n• Help to get H1B Employer.\n• Full time position\n\nCandidate who are missing the required skills, might be provided an option to enhance their skills, so that they can also apply for the role and can make a career in IT industry.\n\nIf you do respond via e-mail, please include a daytime phone number so that we can reach you. In considering candidates, time is of the essence, so please respond ASAP. Thank you",
      job_is_remote: false,
      job_posted_at_timestamp: 1670227200,
      job_posted_at_datetime_utc: "2022-12-05T08:00:00.000Z",
      job_city: "Houston",
      job_state: "TX",
      job_country: "US",
      job_latitude: 29.760427,
      job_longitude: -95.369804,
      job_benefits: null,
      job_google_link:
        "https://www.google.com/search?gl=us&hl=en&q=fFunVwyb9l4AAAAAAAAAAA%3D%3D&cs=1&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=fFunVwyb9l4AAAAAAAAAAA%3D%3D&htidocid=fFunVwyb9l4AAAAAAAAAAA%3D%3D",
      job_offer_expiration_datetime_utc: "2023-08-19T00:00:00.000Z",
      job_offer_expiration_timestamp: 1692403200,
      job_required_experience: {
        no_experience_required: false,
        required_experience_in_months: null,
        experience_mentioned: false,
        experience_preferred: false,
      },
      job_required_skills: null,
      job_required_education: {
        postgraduate_degree: false,
        professional_certification: false,
        high_school: false,
        associates_degree: false,
        bachelors_degree: false,
        degree_mentioned: true,
        degree_preferred: false,
        professional_certification_mentioned: false,
      },
      job_experience_in_place_of_education: false,
      job_min_salary: null,
      job_max_salary: null,
      job_salary_currency: null,
      job_salary_period: null,
      job_highlights: {
        Qualifications: [
          "Knowledge of Python web frameworks and event-driven programming in Python",
          "Basic understanding of front-end technologies",
          "High attention to detail",
          "Excellent communication and problem-solving skills",
          "Proficient understanding of code versioning tools",
          "Know the classes of SCALA, Traits of SCALA, and Collection of SCALA",
          "Bachelors, Masters in Computer Science/ Computer Engineering/ Information Systems/Information Technology/ Electrical Engineering/ Mechanical Engineering",
        ],
        Responsibilities: [
          "Django Frame work required",
          "Worked on Django model, CBV, Django CRUD operation",
        ],
        Benefits: ["On Job Technical support", "Full time position"],
      },
      job_job_title: null,
      job_posting_language: "en",
      job_onet_soc: "15113200",
      job_onet_job_zone: "4",
      job_occupational_categories: [
        "15-1132.00: Software Developers, Applications",
      ],
      estimated_salaries: [
        {
          location: "Houston, TX",
          job_title: "Junior Python Developer",
          publisher_name: "ZipRecruiter",
          publisher_link:
            "https://www.ziprecruiter.com/Salaries/Junior-Python-Developer-Salary-in-Houston,TX",
          min_salary: 43626,
          max_salary: 97799,
          median_salary: 65602,
          salary_period: "YEAR",
          salary_currency: "USD",
        },
        {
          location: "Tomball, TX",
          job_title: "Entry Level Python Developer",
          publisher_name: "Salary.com",
          publisher_link:
            "https://www.salary.com/research/salary/posting/entry-level-python-developer-salary/tomball-tx",
          min_salary: 71904,
          max_salary: 118341,
          median_salary: 92706,
          salary_period: "YEAR",
          salary_currency: "USD",
        },
      ],
      apply_options: [
        {
          publisher: "CareerBuilder",
          apply_link:
            "https://www.careerbuilder.com/job/J3Q2T470PJDG447VZZN?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
          is_direct: false,
        },
      ],
      employer_reviews: [],
    },
  ],
};

const jobTabs = ["About", "Qualifications", "Responsibility"];


const jobDetails = () => {
  const params = useSearchParams();
  const router = useRouter();

  let isLoading = false;
  let error = false;
  const [activeTab, setActiveTab] = useState(jobTabs[0]);

  const DisplayTabContent = () => {
    switch (activeTab) {
      case "Qualifications":
       return  <Specifics
          title="Qualifications Required"
          points={ jobResponseBody.data[0].job_highlights.Qualifications ?? ['N/A']} />
      case "Responsibility":
       return <Specifics
          title="Responsibilities"
          points={ jobResponseBody.data[0].job_highlights?.Responsibilities ?? ['N/A']} />
      case "About":
        return <JobAbout
          title="About the Job"
          info={ jobResponseBody.data[0].job_description ?? ['N/A']} />
        
    }
  }


  // const { data, isLoading, error, reFetch } = useFetch('job-details', {
  //   job_id: params.job_id
  // })
    return (
      <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
      >
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: COLORS.lightWhite,
            },
            headerShadowVisible: false,
            headerBackVisible: false,
            headerLeft: () => {
              return (
                <ScreenHeaderBtn
                  iconUrl={icons.left}
                  dimension={"100%"}
                  handlePress={() => {
                    router.back();
                  }}
                />
              );
            },
            headerRight: () => {
              return (
                <ScreenHeaderBtn iconUrl={icons.share} dimension={"60%"} />
              );
            },
            headerTitle: "Jobs Details Page",
            headerTitleAlign: "center",
          }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          {isLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : error ? (
            <Text>Some Error Occurred</Text>
          ) : jobResponseBody.data.length === 0 ? (
            <Text>No Data</Text>
          ) : (
            <View
            style={{
              flex: 1,
              backgroundColor: COLORS.white,
              marginTop: SIZES.medium,
              padding: 20,
              marginBottom:SIZES.xxLarge+SIZES.xLarge,
            }}
            >
              <Company
                companyLogo={jobResponseBody.data[0].employer_logo}
                companyName={jobResponseBody.data[0].employer_name}
                jobTitle={jobResponseBody.data[0].job_title}
                jobLocation={jobResponseBody.data[0].job_country}
              />
              <JobTabs
                tabs={jobTabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              {DisplayTabContent()}
            </View>
          )}
        </ScrollView>
        <JobFooter
          url={ jobResponseBody.data[0].job_google_link} />
      </View>
    );
}

export default jobDetails;