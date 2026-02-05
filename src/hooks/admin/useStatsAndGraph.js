import { useState } from "react";
import { getPatientGraphService, getRevenueGraphDataService, getStatsForAdminService } from "../../services/admin/stats.service";

export const useStateAndGraph  = ()=>{
    const [loading, setLoading] = useState(false);
  

   const  getStatsForAdmin  = async ()=>{
     try {
          const response = await getStatsForAdminService();
    
          if (!response.success) {
            throw new Error(response.message || "Stats not available");
          }
    
          return response;
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }

  }


  const getRevenueGraphData  =  async () =>{
     try {
          const response = await getRevenueGraphDataService();
    
          if (!response.success) {
            throw new Error(response.message || "Stats not available");
          }
    
          return response;
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }

  }



  const getPatientGraphData  =  async () =>{
     try {
          const response = await getPatientGraphService();
    
          if (!response.success) {
            throw new Error(response.message || "Stats not available");
          }
    
          return response;
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }

  }

  return {getStatsForAdmin ,  getRevenueGraphData ,getPatientGraphData}

}