
﻿using System; 
using System.Collections.Generic; 
using System.Linq; 
using System.Threading.Tasks;
using MeteoMeter.Backend.DataModels;
 
namespace MeteoMeter.Backend.Repositories
{ 
    public interface IResultRepository : IRepository<Result>
    { 
		IQueryable<Result> GetAllWithReferences();
		Task<Result> GetByIdWithReferences(int id);
    } 
}