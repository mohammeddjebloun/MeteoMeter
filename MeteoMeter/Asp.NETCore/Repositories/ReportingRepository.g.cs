
using Microsoft.EntityFrameworkCore; 
using System; 
using System.Collections.Generic; 
using System.Linq; 
using System.Threading.Tasks; 
using  MeteoMeter.Backend.Models;
using  MeteoMeter.Backend.DataModels;

namespace MeteoMeter.Backend.Repositories
{ 
    public class ReportingRepository : Repository<Reporting>, IReportingRepository
    { 
		public ReportingRepository(ApplicationDbContext context) : base(context)
        {
        }

        public IQueryable<Reporting> GetAllWithReferences()
        { 
            return DbContext.Set<Reporting>().Include(m=>m.CreatedBy).Include(m=>m.Picture).Include(m=>m.Choices).Include(m=>m.Results).AsNoTracking(); 
        }

		public async Task<Reporting> GetByIdWithReferences(int id)
        {
            return await DbContext.Set<Reporting>().Include(m=>m.CreatedBy).Include(m=>m.Picture).Include(m=>m.Choices).Include(m=>m.Results).FirstOrDefaultAsync(p=>p.Id == id);
        }
    } 
}